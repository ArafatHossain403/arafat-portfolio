import { MdEmail,} from 'react-icons/md';

const Contact = () => {
    return (
        <div id='contact'>
           <h1 className="text-2xl font-bold text-teal-900">Contact Me</h1>
         <div className='md:flex gap-10 w-1/2 mx-auto mt-7 '>
         <div className="rounded-lg shadow-2xl p-6">
          <form action="" > 
           <div className="mt-4">
           <input type="text" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" />
           </div>
          <div className="mt-4"> <input type="text" placeholder="subject" className="input input-bordered input-primary w-full max-w-xs" /></div>
          <div className="mt-4">
          <textarea className="textarea textarea-primary" placeholder="message"></textarea>
          </div>
           <div className="mt-4">
           <button type="submit" className="btn btn-ghost text-orange-400">Submit</button>
           </div>
           </form>
          </div>
          <div className='mt-10'>
          <p className='text-2xl font-serif  text-left'>Mail</p>
          <div className='flex gap-5 mt align-middle'>
            
          <MdEmail size={40}/>arafathossainsat@gmail.com
          
          </div>
          </div>
         </div>
      
            
        </div>
    );
};

export default Contact;