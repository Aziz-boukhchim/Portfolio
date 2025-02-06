import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {

    return(
        <TypeAnimation

        sequence={[
            "Software Developer." , 3000, "" , 1000,
            "Web developer." , 3000 , "" , 1000,
            "Freelancer." , 3000, "" , 1000,
        ]}
        wrapper='h1'
        cursor={true}
        repeat={Infinity}
        ></TypeAnimation>
    );


}
export default TypingAnimation;