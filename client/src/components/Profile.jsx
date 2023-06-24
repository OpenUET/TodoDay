import PropTypes from 'prop-types'

const nameColors = ['#fbbf24', '#facc15', '#a3e635', '#4ade80']

export default function Avatar({ index, profile }) {
  const { name, avatar, github, title = 'Web developer' } = profile
  return (
    <div className='w-40'>
      <img src={avatar} className='mx-auto mb-4 w-24 rounded-full shadow-lg' alt={name} />
      <a href={github}>
        <h5 className={`mb-2 text-xl font-medium`} style={{ color: `${nameColors[index]}` }}>
          #{name}
        </h5>
      </a>
      <p className='text-sm' style={{ color: '#888888c7' }}>
        {title}
      </p>
    </div>
  )
}

Avatar.propTypes = {
  index: PropTypes.number,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    github: PropTypes.string,
    title: PropTypes.string
  })
}
