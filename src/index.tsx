import { Cover } from './components/Cover';
import * as React from './external/react.js';
import { render } from './external/reactDOM.js';
import { Provider } from './external/reactRedux';
import { applyMiddleware, compose, createStore } from './external/redux';
import { decode, encode } from './persistence';
import { reducers } from './reducers/index';
import { IRootState } from './RootState';

const getEncodedAnswers = () => window.localStorage.getItem('encodedAnswers');

class App extends React.Component {
  public shouldComponentUpdate() {
    return false;
  }
  private store = createStore(
    reducers,
    getEncodedAnswers() === null
      ? {}
      : {
        answers: decode(getEncodedAnswers() as string),
      },
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
      applyMiddleware(store => next => action => {
        const previousAnswers = (store.getState() as IRootState).answers;
        const result = next(action);
        const currentAnswers = (store.getState() as IRootState).answers;
        if (currentAnswers !== previousAnswers) {
          window.localStorage.setItem(
            'encodedAnswers',
            encode(currentAnswers),
          );
        }
      },
    )),
  );
  public render() {
    return (
      <Provider store={ this.store }>
        <Cover/>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('root'));
