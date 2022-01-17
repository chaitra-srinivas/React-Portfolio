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
      <div>
        <h5 className='text-xl font-medium leading-tight mb-2 text-gray-300'>John Doe</h5>
        <p className='text-gray-400'>Web designer</p>
      </div>
    </section>
  );
}
