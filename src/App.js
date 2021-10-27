import './App.css';
import Button from './component/Button';

const App = () => {
  return (
    <div>
      <Button
        buttonText={'Click Me'}
        gradientType={'linear-gradient'}
        gradientDirection={'right'}
        gradientColorOne={'rgba(0, 224, 255, 1)'}
        gradientColorTwo={'rgba(0, 133, 255, 1)'}
        buttonWidth={50}
        buttonHeight={40}
        buttonRadius={2}
      />
    </div>
  );
}

export default App;
