import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {

    return(
        <TypeAnimation

        sequence={[
            "Software Developer." , 2000, "" , 1000,
            "Web developer." , 2000 , "" , 1000,
            "Freelancer." , 2000, "" , 1000,
        ]}
        wrapper='h1'
        cursor={true}
        repeat={Infinity}
        ></TypeAnimation>
    );


}
export default TypingAnimation;