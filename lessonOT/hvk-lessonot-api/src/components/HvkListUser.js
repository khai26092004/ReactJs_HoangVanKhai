import React from 'react'

export default function HvkListUser({renderHvkListUser}) {
    console.log("HvkListUser",renderHvkListUser);
    let hvkElemenntUser = renderHvkListUser.map((hvkUser,index)=>{
      return(
        <>
        <tr>
        <th></th>
                    <th>{hvkUser.id}</th>
                    <th>{hvkUser.UserName}</th>
                    <th>{hvkUser.Password}</th>
                    <th>{hvkUser.Email}</th>
                    <th>{hvkUser.Phone}</th>
                    <th></th>

        </tr>
        </>
      )
    })
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
             <tbody>
               {hvkElemenntUser}
             </tbody>
        </table>
    </div>
  )
}
