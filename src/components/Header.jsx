import eurekaImg from '../assets/eureka-labs-img.png';

const Header = ()  => {

    return (
        <header className="bg-white h-30 justify-center items-center flex">
                <img src={eurekaImg} alt="eureka-img" />
        </header>
    );
}

export default Header;