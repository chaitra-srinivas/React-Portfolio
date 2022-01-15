export default function Footer() {
  return (
    <footer id='footer' className="flex flex-col justify-center items-center bg-gray-900 pt-5" >
       <div class='sm:w-2/3 text-center'>
        <ul className='flex justify-between items-center space-x-7 text-gray-500'>
          <li>Github</li>
          <li>Twitter</li>
          <li>Stack Overflow</li>
        </ul>
        <p class='text-sm text-blue-700 font-bold mb-2 mt-2'>
          © 2022 by Chaitra Srinivasamurthy
        </p>
      </div>
    </footer> 
  );
}
