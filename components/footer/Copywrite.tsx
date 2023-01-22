import IconList from './IconList';

export default function Copywrite() {
    return (
        <div className="py-6 flex flex-row justify-between items-center ">
            <div className='w-32'></div>
            <p className=' text-[12px] text-white '>Copywrite goes to - <a href="https://www.upwork.com/freelancers/hassanfathy" className='text-green-200'>hassan fathy</a></p>
            <IconList />
        </div>
    )
}