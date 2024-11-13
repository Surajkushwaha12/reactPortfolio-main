import React from 'react'

function Education() {
  const bgcolorDark = "bg-[#3d3a3a]"
  return (
    <div className=''>
      <h2 className='pb-2'>Education </h2>
      <hr />
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2 ">July 2024</p>
            <p className="m-2">oct 2021</p>
        </div>
        <div>
            <h2 className="text-lg"> Bachelor of Technology - C.S.E </h2>
            <p className="text-sm" >Maharana Pratap Engineering College, Kanpur</p>
        </div>
      </div>
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">june 2020</p>
            <p className="m-2">July 2017</p>
        </div>
        <div>
            <h2 className="text-lg">Diploma in Textile Technology</h2>
            <p className="text-sm" >Govt. Polytechnic, Kuru Pindra Varanasi</p>
        </div>
      </div>
    </div>
  )
}

export default Education
