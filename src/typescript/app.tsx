import * as React from 'react';
import { Hello } from './components/Hello';

interface Props {
}

class App extends React.Component<Props, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <Hello compiler='hey it reloads' framework='hoooooray' />
        );
    };
};

export default App;