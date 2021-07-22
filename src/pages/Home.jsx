import band from './TheInternet.gif'

export default function Home(){
    return(
        <div className="home">
            <img src={band} alt="pic of band" />
            <p>The Internet is an American band from Los Angeles, California formed in early 2011. Their music is a blend of R&B, hip hop, jazz, funk, and electronic dance music.</p>
        </div>
    )
}