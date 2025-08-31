
import './education.css';

const Educations = () => {
  return (
    <table className='my-customer-table'>
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Period</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diploma</td>
          <td>General</td>
          <td>Iteletique de Bujumbura</td>
          <td>2015 - 2017</td>
        </tr>
        <tr>
          <td>BIT</td>
          <td>Computer Science (CS)</td>
          <td>University des Grand Lacs (UGL)</td>
          <td>2015 - 2017</td>
        </tr>
        <tr>
          <td>BIT</td>
          <td>BCs</td>
          <td>Cavendish University Uganda (CUU)</td>
          <td>2015 - 2017</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Educations