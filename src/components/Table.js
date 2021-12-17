import './Card.css';

function Card (props){
    return(
        <div>
            <table>
                <tr>
                    <td className='mainHead' colSpan={4}><h4>Candidate No: {props.num}</h4></td>
                </tr>
                <tr>
                    <td className='head'><h4>Candidate Name: </h4></td>
                    <td>{props.name}</td>
                    <td className='head'><h4>age: </h4></td>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <td className='head'><h4>Blood Group = </h4></td>
                    <td>{props.bloodGroup}</td>
                    <td className='head'><h4>Address = </h4></td>
                    <td>{props.address}</td>
                </tr>
                <tr>
                    <td className='head'><h4>Mobile Number = </h4></td>
                    <td>{props.mobNo}</td>
                    <td className='head'><h4>Email Id = </h4></td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td><h4>Degree Trade = </h4></td>
                    <td>{props.trade}</td>
                    <td><h4>Percentage/CGPA = </h4></td>
                    <td>{props.cgpa}</td>
                </tr>
                <tr>
                    <td><h4>10th Marks in percentage = </h4></td>
                    <td>{props.ssc}</td>
                    <td><h4>12th marks in percentage = </h4></td>
                    <td>{props.hsc}</td>
                </tr>
            </table>
            <hr />
        </div>
    );
}
export default Card;