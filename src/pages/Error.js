import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section'>
      <h2>404 Page Not Found</h2>
      <Link to='/' className='btn'>
        Back To Home
      </Link>
    </section>
  )
}
export default Error
