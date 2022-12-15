import profile from "../profile_picture.jpg"

export default function Info() {
   return (    
    <header className="header--info">
        <img src={profile} alt="profile_pic"></img>
        <h1>Herbert Huerto</h1>
        <h2>Frontend Developer</h2>
        <h3>herberthuerto.website</h3>
        <div className="header--contacts">
            <button className="button--email"><i className="fa fa-envelope"></i>Email</button>
            <button className="button--linkedin"><i className="fa fa-linkedin"></i>Linkedin</button>
        </div>        
    </header>
   )
}