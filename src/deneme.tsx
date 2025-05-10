function CV() {
  return (
    <div className="mx-auto px-4 py-10 text-gray-800 space-y-10 leading-relaxed">
      {/* İsim & Pozisyon */}
      <header className="space-y-1 text-center">
        <h1 className="text-3xl font-bold">Metehan Karataş</h1>
        <p className="text-gray-600">Computer Engineer · Software Developer</p>
        <p className="text-sm text-gray-500">
          Başakşehir / İstanbul ·{" "}
          <a href="mailto:mxetehan@hotmail.com" className="text-blue-600 hover:underline">
            mxetehan@hotmail.com
          </a>{" "}
          · +90 535 772 84 99
        </p>
      </header>

      {/* Özet */}
      <section>
        <h2 className="text-lg font-semibold border-b border-gray-200 mb-2 pb-1">Summary</h2>
        <p className="text-sm text-gray-700">
          Motivated computer engineer with a passion for mobile/web development and 3D design. Focused on clean code, team collaboration and building real-world projects with meaningful impact.
        </p>
      </section>

      {/* Eğitim */}
      <section>
        <h2 className="text-lg font-semibold border-b border-gray-200 mb-2 pb-1">Education</h2>
        <div className="text-sm text-gray-700">
          <p className="font-medium">Computer Engineering (2019 – 2024)</p>
          <p>İstanbul Kültür University, Faculty of Engineering</p>
        </div>
      </section>

      {/* Deneyim */}
      <section>
        <h2 className="text-lg font-semibold border-b border-gray-200 mb-2 pb-1">Experience</h2>
        <ul className="space-y-4 text-sm text-gray-700">
          <li>
            <p className="font-medium">Intern – Guru Sistem <span className="text-gray-500">(2024)</span></p>
            <p>Built Flutter demo apps and compared frameworks like React Native and Ionic.</p>
          </li>
          <li>
            <p className="font-medium">Intern – Sentez Yazılım <span className="text-gray-500">(2022)</span></p>
            <p>Developed websites with HTML/CSS/JS and desktop apps with C# (MVC).</p>
          </li>
          <li>
            <p className="font-medium">Part-Time – Ant İnsan Kaynakları <span className="text-gray-500">(2021–2022)</span></p>
            <p>Improved communication and coordination through field work and teamwork.</p>
          </li>
        </ul>
      </section>

      {/* Projeler */}
      <section>
        <h2 className="text-lg font-semibold border-b border-gray-200 mb-2 pb-1">Projects</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>
            <strong>Onbir Travel:</strong> React Native + Supabase app for discovering Turkish cities.
          </li>
          <li>
            <strong>Onbir Gym:</strong> Fitness app with Blender animations and Supabase storage.
          </li>
        </ul>
      </section>

      {/* Yetenekler */}
      <section>
        <h2 className="text-lg font-semibold border-b border-gray-200 mb-2 pb-1">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 text-sm text-gray-700 gap-y-2">
          <span>React Native</span>
          <span>JavaScript / Next.js</span>
          <span>Supabase</span>
          <span>Blender (3D)</span>
          <span>C / C++ / C#</span>
          <span>HTML / CSS</span>
          <span>Flutter (Beginner)</span>
          <span>Firebase</span>
          <span>English (B2)</span>
        </div>
      </section>
    </div>
  );
}

export default CV;
