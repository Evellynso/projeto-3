import Profile from './components/Profile'
import './components/Profile/profile.css'

export default function App() {
    return (
        <div 
            style={{
                backgroundColor: "aliceBlue",
                borderRadius: "5px",
                padding: "20px",
            }}
        >
            <Profile 
                avatar={"./euu.jfif"}
                name={"Evellyn Cleyciane"}
                bio={"Software Developer with a passion for creating amazing web applications."}
                email={"evellynsousa802@gmail.com"}
                phone={"+55(85)992558499"}
                githubUrl={"https://github.com/Evellynso"}
                instagramUrl={"https://www.instagram.com/ellyn_lima?igsh=ZzFoaGoza2RoeHcy"}
            />
        </div>
    );
}