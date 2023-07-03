import { BiLineChart } from 'react-icons/bi'
import { BsCalendarHeart } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaMedal } from 'react-icons/fa'
import { ImFire } from 'react-icons/im'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import CompletedDaysCalendar from './CompletedDaysCalendar'
import DailyCompletionPercentageChart from './DailyCompletionPercentageChart'
import StreakInfo from './StreakInfo'

const startDate = new Date('2023-06-15')
const endDate = new Date()
const dayOffs = ['2023-06-23', '2023-07-01']

startDate.setHours(0, 0, 0, 0)
endDate.setHours(0, 0, 0, 0)

export default function Dashboard() {
  return (
    <div className='text-center max-w-3xl m-auto'>
      <nav className='mb-5 flex justify-center gap-3 text-3xl text-yellow-400'>
        <Link to='/' component={'h1'} className='font-medium leading-normal mt-0 mb-2 text-yellow-400 hover:text-yellow-300'>
          Home
        </Link>
        <div name={'Divider'} className='pt-1'>
          |
        </div>
        <Link
          to='/dashboard'
          component={'h1'}
          className='text-yellow-400 hover:text-yellow-300 font-medium leading-normal mt-0 mb-2 underline'
        >
          Dashboard
        </Link>
      </nav>
      <Tabs>
        <TabList className='flex flex-row gap-16 select-none m-auto cursor-pointer focus:outline-none justify-center items-center mb-8 bg-[#1b1313] w-64 pl-6 pr-6 pb-3 pt-3 rounded-full'>
          <Tab>
            <BsCalendarHeart
              size={32}
              className='middle none center h-12 max-h-[48px] w-12 max-w-[48px] rounded-lg bg-inherit font-sans text-sm font-bold uppercase text-amber-500 shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            />
          </Tab>
          <Tab>
            <BiLineChart
              size={32}
              className='middle none center h-12 max-h-[48px] w-12 max-w-[48px] rounded-lg bg-inherit font-sans text-sm font-bold uppercase text-amber-500 shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            />
          </Tab>
        </TabList>

        <TabPanel>
          <Tab1 />
        </TabPanel>

        <TabPanel>
          <Tab2 />
        </TabPanel>
      </Tabs>
    </div>
  )
}

function Tab1() {
  return (
    <div className='bg-stone-950 max-w-2xl m-auto border border-stone-600 shadow-2xl rounded-lg'>
      <div className='flex h-20 w-full'>
        <StreakInfo
          icon={<ImFire size={36} color={'#fe8300'} />}
          startDate={startDate}
          endDate={endDate}
          text={'Current Streak'}
        />
        <div name={'divider'} className='border-s-2 border-stone-600'></div>
        <StreakInfo
          icon={<FaMedal size={36} color={'#fe8300'} />}
          startDate={startDate}
          endDate={endDate}
          text={'Longest Streak'}
        />
      </div>
      <CompletedDaysCalendar startDate={startDate} endDate={endDate} dayOffs={dayOffs} />
    </div>
  )
}

function Tab2() {
  return (
    <div className='flex flex-col gap-5 p-4 max-w-3xl m-auto border border-stone-600 shadow-2xl rounded-lg'>
      <DailyCompletionPercentageChart />
    </div>
  )
}
