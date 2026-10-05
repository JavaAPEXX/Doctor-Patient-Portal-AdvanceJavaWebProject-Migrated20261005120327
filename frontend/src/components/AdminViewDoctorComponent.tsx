import React from 'react';

type AdminViewDoctorComponentProps = {
    data?: Record<string, any>;
};

export const AdminViewDoctorComponent: React.FC<AdminViewDoctorComponentProps> = ({ data = {} }) => {
    const { doctorLst, errorMsg, successMsg } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div className="container-fluid p-3">
        		<div className="row">
        			
        			<div className="col-md-12">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="fs-3 text-center text-danger">List of Doctors</p>
        
        						
        						
        						{(Boolean(successMsg )) && (
        							<p className="text-center text-success fs-3">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						
        						{(Boolean(errorMsg )) && (
        							<p className="text-center text-danger fs-3">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        						
        
        						
        
        						<div className="modern-table-wrapper"><table className="modern-table table table-hover" className="table table-striped">
        							<thead>
        								<tr className="table-info">
        									
        									<th scope="col">Full Name</th>
        									<th scope="col">DOB</th>
        									<th scope="col">Qualification</th>
        									<th scope="col">Specialist</th>
        									<th scope="col">Email</th>
        									<th scope="col">Phone</th>
        									<th colspan="2" className="text-center" scope="col">Action</th>
        								</tr>
        							</thead>
        							<tbody>
        
        								<tr>
        									
        									<th>{doctorLst.fullName}</th>
        									<td>{doctorLst.dateOfBirth}</td>
        									<td>{doctorLst.qualification}</td>
        									<td>{doctorLst.specialist}</td>
        									<td>{doctorLst.email}</td>
        									<td>{doctorLst.phone}</td>
        
        
        									<td><a className="btn btn-sm btn-primary" href="edit_doctor.jsp?id={doctorLst.id}">Edit</a></td>
        									<td><a className="btn btn-sm btn-danger" href="../deleteDoctor?id={doctorLst.id}">Delete</a></td>
        
        
        
        								</tr>
        ))}
        
        
        							</tbody>
        						</table></div>
        
        						
        
        
        					</div>
        
        				</div>
        			</div>
        		</div>
        	</div>
            </div>
        </div>
    );
};

export default AdminViewDoctorComponent;
