export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 gap-5">
        <div className="flex items-center">
          <img src="logo.png" alt="HobbitCode Logo" width={60} height={60} />
          <span className="text-white text-3xl font-semibold">HobbitCode</span>
        </div>
        <h3 className="text-xl text-white">Specializing in Website and AI Services</h3>
        <div className="text-white">
          <span className="font-semibold">Our services</span>
          <ul className="flex flex-col justify-items-start">
            <li>
              <a href="https://tesla-inventory.com">tesla-inventory.com</a>
            </li>
            <li>
              <a href="https://news.tesla-inventory.com/news">news.tesla-inventory.com/news</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2 m-3 text-sm">
        <div>
          <h2>About Us</h2>
          <p>
            HobbitCode develop, market, and sell virtual services via an online website. These services are designed to
            enhance efficiency and overall productivity for individuals.
          </p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>Email: contact@hobbitcode.com</p>
        </div>
        <div>
          <p>© 2024 HobbitCode</p>
        </div>
        <div>
          <p>v2024.05.03</p>
        </div>
      </div>
    </div>
  );
}
