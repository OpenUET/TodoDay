import PropTypes from 'prop-types'

const nameColors = ['#fbbf24', '#facc15', '#a3e635', '#4ade80']

export default function Profile({ index, profile }) {
  const { name, avatar, github, role = 'Web developer' } = profile
  return (
    <div className='w-40'>
      <img src={avatar} className='mx-auto mb-4 w-24 rounded-full shadow-lg' alt={name} />
      <a href={github}>
        <h5 className={`mb-2 text-xl font-medium`} style={{ color: `${nameColors[index]}` }}>
          #{name}
        </h5>
      </a>
      <p className='text-sm' style={{ color: '#888888c7' }}>
        {role}
      </p>
    </div>
  )
}

Profile.propTypes = {
  index: PropTypes.number,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    github: PropTypes.string,
    role: PropTypes.string
  })
}
