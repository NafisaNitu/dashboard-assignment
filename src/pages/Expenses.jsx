import DailyExpenses from '../components/DailyExpenses';
import HomeContentRight from '../components/HomeContentRight';
import Header from '../components/Header';

function Expenses() {

  return (
    <div className="flex flex-wrap justify-center h-full">
      <div className='lg:w-2/3 w-full bg-white lg:rounded-tl-3xl lg:rounded-bl-3xl 2xl:px-20 xl:px-20 sm:px-10 px-6 xl:py-16 sm:py-10 py-6'>
          <Header />
          <DailyExpenses />  

      </div>
        <HomeContentRight />
    </div>
  )
}

export default Expenses
