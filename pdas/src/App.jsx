import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Person Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Alexa'
                handle='@alexa90'
                image={AlexaImage}
                description='Alexa was created by Amazon to help you buy things'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Cortana'
                handle='@cortana56'
                image={CortanaImage}
                description='Cortana was created by Microsoft to help you manage your computer'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Siri'
                handle='@siri01'
                image={SiriImage}
                description='Siri was created by Apple to help you control your phone'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
