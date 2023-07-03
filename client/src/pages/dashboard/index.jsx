import { FaMedal } from 'react-icons/fa'
import { ImFire } from 'react-icons/im'
import { BsFillCalendarHeartFill } from 'react-icons/bs'
import { BiLineChart } from 'react-icons/bi'
import CompletedDaysCalendar from './CompletedDaysCalendar'
import DailyCompletionPercentageChart from './DailyCompletionPercentageChart'
import StreakInfo from './StreakInfo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const startDate = new Date('2023-06-15')
const endDate = new Date()
const dayOffs = ['2023-06-23', '2023-07-01']

startDate.setHours(0, 0, 0, 0)
endDate.setHours(0, 0, 0, 0)

export default function Dashboard() {
  return (
    <div className='bg-white text-center max-w-3xl m-auto rounded-full'>
      <h1 className='text-4xl font-medium leading-normal mt-0 mb-2 text-yellow-800'>Dashboard</h1>
      <Tabs>
        <TabList className='flex flex-row gap-16 select-none m-auto cursor-pointer focus:outline-none justify-center items-center mb-8'>
          <Tab>
            <BsFillCalendarHeartFill size={32} className='middle none center h-12 max-h-[48px] w-12 max-w-[48px] rounded-lg bg-inherit font-sans text-sm font-bold uppercase text-orange-400 shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'/>
          </Tab>
          <Tab>
            <BiLineChart size={32} className='middle none center h-12 max-h-[48px] w-12 max-w-[48px] rounded-lg bg-inherit font-sans text-sm font-bold uppercase text-red-500 shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'/>
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
    <div className='max-w-2xl m-auto border shadow-2xl rounded-lg'>
      <div className='flex h-20 w-full'>
        <StreakInfo
          icon={<ImFire size={36} color={'#fe8300'} />}
          startDate={startDate}
          endDate={endDate}
          text={'Current Streak'}
        />
        <div name={'divider'} className='border-s-2'></div>
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
    <div className='max-w-3xl m-auto border shadow-2xl rounded-lg'>
      <h2>Chart</h2>
      <DailyCompletionPercentageChart />
    </div>
  )
}
