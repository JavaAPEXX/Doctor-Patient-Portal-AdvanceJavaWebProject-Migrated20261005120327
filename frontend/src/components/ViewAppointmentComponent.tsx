import React from 'react';

type ViewAppointmentComponentProps = {
    data?: Record<string, any>;
};

export const ViewAppointmentComponent: React.FC<ViewAppointmentComponentProps> = ({ data = {} }) => {
    const { apptList, doctor } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                {(!userObj ) && (
        
        		<c:redirect url="/user_login.jsp"></c:redirect>
        
        	)}
        
        	
        
        	<div className="container-fluid my-bg-img p-5">
        		
        		<p className="text-center fs-2 text-white"></p>
        
        	</div>
        
        	
        
        	
        
        	<div className="container-fluid p-3">
        		<p className="fs-2"></p>
        
        		<div className="row">
        
        
        
        			
        			<div className="col-md-9">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="fw-bold text-center myP-color fs-4">Appointment
        							List</p>
        
        						
        
        						<div className="modern-table-wrapper"><table className="modern-table table table-hover" className="table table-striped">
        							<thead>
        								<tr className="my-bg-color text-white">
        									
        									<th scope="col">Full Name</th>
        									<th scope="col">Gender</th>
        									<th scope="col">Age</th>
        									<th scope="col">Appointment Date</th>
        									
        									<th scope="col">Phone</th>
        									<th scope="col">Diseases</th>
        									<th scope="col">Doctor Name</th>
        									
        									
        									<th scope="col">Status</th>
        								</tr>
        							</thead>
        							<tbody>
        
        
        								<tr>
        									
        									<td>{apptList.fullName}</td>
        									<td>{apptList.gender}</td>
        									<td>{apptList.age}</td>
        									<td>{apptList.appointmentDate}</td>
        									
        									<td>{apptList.phone}</td>
        									<td>{apptList.diseases}</td>
        									<td>{doctor.fullName}</td>
        									
        									
        									<td>
        ))}
        									</td>
        
        
        								</tr>
        
        
        ))}
        
        
        							</tbody>
        						</table></div>
        
        
        
        
        					</div>
        				</div>
        
        			</div>
        
        			
        			<div className="col-md-3 p-3">
        				
        				
        				<img alt="" src="img/wdoc.jpg" width="250" height="" />
        			</div>
        
        
        
        		</div>
        
        
        	</div>
            </div>
        </div>
    );
};

export default ViewAppointmentComponent;
