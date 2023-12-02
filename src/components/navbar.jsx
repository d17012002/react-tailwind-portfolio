function Navbar() {
  return (
    <nav class="bg-gray-900 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="text-xl sm:text-2xl font-semibold text-white font-mono ">
              {"< anurag kumar />"}
            </a>
          </div>
          <div className=" grid justify-items-end h-[100%] roll-animation">
            <img className=" w-[3.5rem] sm:w-[3.5rem] rounded-full" src="https://i.pinimg.com/originals/e2/ff/74/e2ff7495b48676fb50c374f9f4db42bd.jpg" />
          </div>
          
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
