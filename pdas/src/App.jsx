import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div>
      <div>Person Digital Assistants</div>

      <ProfileCard title='Alexa' handle='@alexa90' />
      <ProfileCard title='Cortana' handle='@cortana56' />
      <ProfileCard title='Siri' handle='@siri01' />
    </div>
  );
};

export default App;
