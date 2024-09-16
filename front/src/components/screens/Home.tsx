import advancedImage from '../../assets/images/home/advanced.jpg'
import begginerImage from '../../assets/images/home/begginer.jpg'
import intermediateImage from '../../assets/images/home/intermediate.jpg'
import { ICard3d } from '../../shared/interfaces/models'
import Footer from '../layout/Footer'
import { Card3d } from '../ui/aceternityUi/3d-card/Card3d'

const begginer: ICard3d = {
	title: 'Begginer',
	description:
		'A beginner in badminton is someone who is just starting to explore the game. They are learning basic skills like how to grip the racket, serve, and perform simple shots such as clears and drops. Beginners are focused on understanding the rules of the game, moving around the court, and improving their hand-eye coordination. Their main goal is to build a solid foundation and have fun while developing their love for the sport.',
	image: begginerImage,
}

const intermediate: ICard3d = {
	title: 'Intermediate',
	description:
		'An intermediate badminton player has a good grasp of the basic techniques and is now working on refining their skills. They can execute a variety of shots such as smashes, net shots, and drives with more control and consistency. They are also becoming more aware of court positioning, footwork, and strategies to outplay their opponents. At this level, players focus on improving their speed, accuracy, and stamina to take their game to the next level.',
	image: intermediateImage,
}

const advanced: ICard3d = {
	title: 'Advanced',
	description:
		'An advanced badminton player is highly skilled and has a deep understanding of the game. They possess excellent technique, footwork, and the ability to play a wide range of shots with precision. Advanced players are strategic, anticipating their opponent’s moves and using tactics like deception and fast-paced rallies to dominate the game. They have strong physical endurance, quick reflexes, and are constantly seeking ways to enhance their performance through advanced training and competitive play.',
	image: advancedImage,
}

function Home() {
	return (
		<>
			<div className='pt-40 pb-10 text-center	bg-header_bg bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center'>
				<h1 className='text-8xl	'>Welcome to BadmiLearn!</h1>
				<h1 className='text-4xl	mt-5'>The site for your badminton improving</h1>
			</div>
			<div className='px-10 py-10 bg-s1_big_bg bg-no-repeat bg-cover text-center text-white'>
				<div className=' text-6xl'>Choose your level!</div>

				{/* <BackgroundOverlayCard></BackgroundOverlayCard> */}
				<div className='flex justify-evenly'>
					<Card3d card={begginer} />
					<Card3d card={intermediate} />
					<Card3d card={advanced} />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home
