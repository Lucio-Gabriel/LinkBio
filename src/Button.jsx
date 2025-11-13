export default function Button(props) {
    return(
        <a href={props.link} target="__blank" 
            className='bg-[#333333] w-72 h-14 flex items-center justify-center rounded-md text-white font-medium hover:bg-white hover:text-[#333333] duration-300 m-3'>
            {props.children}
        </a>
    );
}