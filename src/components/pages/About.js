export default function About() {
  return (
    <section id='about' className='flex flex-col justify-center items-center'>
     
      <div className='justify-center'>
        <img
          src={require("../pages/images/portfolio.jpg")}
          className='rounded-full w-32 mb-4 mx-auto'
          alt='Avatar'
        />
      </div>
      <div className='text-center lg:w-1/2'>
      <h5 className='text-xl font-medium leading-tight mb-2 text-gray-300 '>Chaitra Srinivasamurthy</h5>
        <p className='text-gray-400'>
          I am a full-stack web developer based in Melbourne, Australia.
          I have a background in software testing and developement. I am currently specializing in web developement technologies.<br/>
          
          My past experience with technology and my love for programming make me a valued and reliable team member. </p> </div>
    </section>
  );
}
