"use client";

import { useState } from "react";

export default function EmployeeForm(){


const [id,setId]=useState("");


const [employeeId,setEmployeeid]=useState("");


const [departmentDesignation,setDepartmentdesignation]=useState("");


const [fullName,setFullname]=useState("");


const [dateOfBirth,setDateofbirth]=useState("");


const [bloodGroup,setBloodgroup]=useState("");


const [employeeIdType,setEmployeeidtype]=useState("");


const [employeeIdNumber,setEmployeeidnumber]=useState("");


const [nagadNumber,setNagadnumber]=useState("");


const [joiningDate,setJoiningdate]=useState("");


const [bankAccountName,setBankaccountname]=useState("");


const [bankAccountNumber,setBankaccountnumber]=useState("");


const [bankName,setBankname]=useState("");


const [branchName,setBranchname]=useState("");


const [routingNumber,setRoutingnumber]=useState("");


const [nomineeName,setNomineename]=useState("");


const [nomineeDateOfBirth,setNomineedateofbirth]=useState("");


const [nomineeIdType,setNomineeidtype]=useState("");


const [nomineeIdNumber,setNomineeidnumber]=useState("");


const [nomineeContactNumber,setNomineecontactnumber]=useState("");


const [relationshipType,setRelationshiptype]=useState("");


const [serviceStatus,setServicestatus]=useState("");


const [createdAt,setCreatedat]=useState("");


const [updatedAt,setUpdatedat]=useState("");


return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-8">

Employee

</h1>


<div className="mb-5">

<label className="block mb-2">

Id

</label>

<input

type="number"

value={ id }

onChange={(e)=>setId(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Employee Id

</label>

<input

type="text"

value={ employeeId }

onChange={(e)=>setEmployeeid(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Department Designation

</label>

<input

type="text"

value={ departmentDesignation }

onChange={(e)=>setDepartmentdesignation(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Full Name

</label>

<input

type="text"

value={ fullName }

onChange={(e)=>setFullname(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Date Of Birth

</label>

<input

type="text"

value={ dateOfBirth }

onChange={(e)=>setDateofbirth(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Blood Group

</label>

<input

type="text"

value={ bloodGroup }

onChange={(e)=>setBloodgroup(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Employee Id Type

</label>

<input

type="text"

value={ employeeIdType }

onChange={(e)=>setEmployeeidtype(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Employee Id Number

</label>

<input

type="text"

value={ employeeIdNumber }

onChange={(e)=>setEmployeeidnumber(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Nagad Number

</label>

<input

type="text"

value={ nagadNumber }

onChange={(e)=>setNagadnumber(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Joining Date

</label>

<input

type="text"

value={ joiningDate }

onChange={(e)=>setJoiningdate(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Bank Account Name

</label>

<input

type="text"

value={ bankAccountName }

onChange={(e)=>setBankaccountname(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Bank Account Number

</label>

<input

type="text"

value={ bankAccountNumber }

onChange={(e)=>setBankaccountnumber(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Bank Name

</label>

<input

type="text"

value={ bankName }

onChange={(e)=>setBankname(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Branch Name

</label>

<input

type="text"

value={ branchName }

onChange={(e)=>setBranchname(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Routing Number

</label>

<input

type="text"

value={ routingNumber }

onChange={(e)=>setRoutingnumber(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Nominee Name

</label>

<input

type="text"

value={ nomineeName }

onChange={(e)=>setNomineename(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Nominee Date Of Birth

</label>

<input

type="text"

value={ nomineeDateOfBirth }

onChange={(e)=>setNomineedateofbirth(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Nominee Id Type

</label>

<input

type="text"

value={ nomineeIdType }

onChange={(e)=>setNomineeidtype(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Nominee Id Number

</label>

<input

type="text"

value={ nomineeIdNumber }

onChange={(e)=>setNomineeidnumber(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Nominee Contact Number

</label>

<input

type="text"

value={ nomineeContactNumber }

onChange={(e)=>setNomineecontactnumber(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Relationship Type

</label>

<input

type="text"

value={ relationshipType }

onChange={(e)=>setRelationshiptype(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Service Status

</label>

<input

type="text"

value={ serviceStatus }

onChange={(e)=>setServicestatus(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Created At

</label>

<input

type="text"

value={ createdAt }

onChange={(e)=>setCreatedat(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


<div className="mb-5">

<label className="block mb-2">

Updated At

</label>

<input

type="text"

value={ updatedAt }

onChange={(e)=>setUpdatedat(e.target.value)}

className="border rounded-lg p-3 w-full"

/>

</div>


</div>

);

}