const artworks = [
  { img: "art1.jpg", caption: "'DeadPool and Wolverine⚔️'", instagram: "https://www.instagram.com/p/C92zduITQwe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art2.jpg", caption: "'Hrithik Roshan From AgneePath'", instagram: "https://www.instagram.com/p/CQDfgndAUyt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art3.jpg", caption: "'Whiskers And Wings : A delicate encounter'", instagram: "https://www.instagram.com/p/C7Mi2s8PxIX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art4.jpg", caption: "'Man’s best friend, sketched with love'", instagram: "https://www.instagram.com/p/C45ktHeRDw2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art5.jpg", caption: "'Matthew Perry❤️<br>(19 August 1969 -28 October 2023)'", instagram: "https://www.instagram.com/p/C0vxOZqx2ug/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art6.jpg", caption: "'Robert Downey Jr. ❤️'", instagram: "https://www.instagram.com/p/CyITfX-Rs_K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art7.jpg", caption: "'Black Panther🐾'", instagram: "https://www.instagram.com/p/B7EPEv-FgiX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art8.jpg", caption: "'The Moon Knight🌙'", instagram: "https://www.instagram.com/p/CvC0GAlvCyZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art9.jpg", caption: "'Paul Walker'", instagram: "https://www.instagram.com/p/CbFFQRovPnB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art10.jpg", caption: "'Hrithik Roshan from WAR'", instagram: "https://www.instagram.com/p/CIc3d4CgEht/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art11.jpg", caption: "'Henry Cavill'", instagram: "https://www.instagram.com/p/DG-rA9XybzB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art12.jpg", caption: "'DeadPool'", instagram: "https://www.instagram.com/p/C7vjGlBN9CN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art13.jpg", caption: "'The Iconic Character <br> Captian Jack Sparrow'", instagram: "https://www.instagram.com/p/CzIRcc6xHfc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art14.jpg", caption: "'Chadwick Boseman as King T'Challa'", instagram: "https://www.instagram.com/p/CwyuHmLPgEq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art15.jpg", caption: "'Wednesday Addams'", instagram: "https://www.instagram.com/p/CwWQhOuv9wL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art16.jpg", caption: "'The voice of India <br> ARIJIT SINGH'", instagram: "https://www.instagram.com/p/CuCH8BEvDM7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art17.jpg", caption: "'Captain America'", instagram: "https://www.instagram.com/p/B7dH04CjPTe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art18.jpg", caption: "'Claws of steel, heart of a father'", instagram: "https://www.instagram.com/p/B-CB3qrlG17/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art19.jpg", caption: "'Colossus'", instagram: "https://www.instagram.com/p/B-KOHoslhk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art20.jpg", caption: "'The best shooter in NBA History<br>Stephen Curry'", instagram: "https://www.instagram.com/p/B_6tcyilUh9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art21.jpg", caption: "'When walls can't hide the truth—eyes that see beyond the cracks'", instagram: "https://www.instagram.com/p/B_RZr_cFLC8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art22.jpg", caption: "'The Unsung hero of Avengers<br>HAWKEYE🏹'", instagram: "https://www.instagram.com/p/CFJ4nAMgiMj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art23.jpg", caption: "'Self-Portrait'", instagram: "https://www.instagram.com/p/CexewtQP7cC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art24.jpg", caption: "'Jensen Ackles as<br>Dean Winchester'", instagram: "https://www.instagram.com/p/CXd8cx4v-TT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art25.jpg", caption: "'Logan'", instagram: "https://www.instagram.com/p/CASIO4uFCOJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art26.jpg", caption: "'The HawkEye'", instagram: "https://www.instagram.com/p/COUczkIAxqE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art27.jpg", caption: "'Charlie Puth Voicenotes Album Cover'", instagram: "https://www.instagram.com/p/CTZDlD3P-NZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art28.jpg", caption: "'Sushant Singh Rajput'", instagram: "https://www.instagram.com/p/CDBKLAgA-Sl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art29.jpg", caption: "'Harry Potter'", instagram: "https://www.instagram.com/p/B9Ouz26lqum/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art30.jpg", caption: "'Beauty In Death'", instagram: "https://www.instagram.com/p/DIYEQkQyqIs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art31.jpg", caption: "'The Twilight lovebirds<br>Bella and Edward'", instagram: "https://www.instagram.com/p/CS9R13epQI_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art32.jpg", caption: "'The Greek God Of India'", instagram: "https://www.instagram.com/p/B_l-2jnlgWZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art33.jpg", caption: "'Dr Stephen Strange'", instagram: "https://www.instagram.com/p/CCDZTPkgexV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art34.jpg", caption: "'Taylor Swift'", instagram: "https://www.instagram.com/p/B9ZJdhJDfrK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art35.jpg", caption: "'Stan Lee'", instagram: "https://www.instagram.com/p/B9Lnv4Mluy6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art36.jpg", caption: "'Eren Yeager'", instagram: "https://www.instagram.com/p/Cajj0PePn4i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art37.jpg", caption: "'Itachi Uchiha'", instagram: "https://www.instagram.com/p/CQiWnaYgdiT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art38.jpg", caption: "'Goku'", instagram: "https://www.instagram.com/p/CQOZkPygvDT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art39.jpg", caption: "'Grimmjow Jaegarjaquez'", instagram: "https://www.instagram.com/p/CSYl4iRJerl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art40.jpg", caption: "'Ultra Instinct Goku'", instagram: "https://www.instagram.com/p/CQOZh-bgyyn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art41.jpg", caption: "'Iron Man'", instagram: "https://www.instagram.com/p/B6fNGTAFCuZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art42.jpg", caption: "'Dragon Ball Z'", instagram: "https://www.instagram.com/p/CEeq9eNAzA6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art43.jpg", caption: "'Tōshirō Hitsugaya'", instagram: "https://www.instagram.com/p/CGe9AB2g75i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art44.jpg", caption: "'Neji'", instagram: "https://www.instagram.com/p/CJh29l6Aejf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art45.jpg", caption: "C' V Raman'", instagram: "https://www.instagram.com/p/CgFNnMXPz3C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art46.jpg", caption: "'The Sound Hashira<br>Tengen Uzui'", instagram: "https://www.instagram.com/p/CpzNN_zv3rl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art47.jpg", caption: "'Ken Kaneki'", instagram: "https://www.instagram.com/p/CRvzPwyNHku/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art48.jpg", caption: "'Uchiha Sasuke'", instagram: "https://www.instagram.com/p/CRXzXABN6zi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art49.jpg", caption: "'When death doesn’t let go, and neither do you'", instagram: "https://www.instagram.com/p/CDSrZlfA2mh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art50.jpg", caption: "'Assassin Creed'", instagram: "https://www.instagram.com/p/B-67bDHDWhR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art51.jpg", caption: "'Ed Sheeran'", instagram: "https://www.instagram.com/p/CwVLmq9RiBt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art52.jpg", caption: "'Kamado Tanjiro'", instagram: "https://www.instagram.com/p/C8hgzXzPRif/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art53.jpg", caption: "'Zenitsu Agatsuma'", instagram: "https://www.instagram.com/p/C8SBPlZP50N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art54.jpg", caption: "'Inosuke Hashibira'", instagram: "https://www.instagram.com/p/C8PfRsHyEB3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art55.jpg", caption: "'UI Goku'", instagram: "https://www.instagram.com/p/C9FFzl0vYo5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art56.jpg", caption: "'Roronoa Zoro'", instagram: "https://www.instagram.com/p/DET77zQS9pL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art57.jpg", caption: "'The Hedgehog<br>Sonic'", instagram: "https://www.instagram.com/p/C_phnfATiO3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art58.jpg", caption: "'The Hedgehog<br>Shadow'", instagram: "https://www.instagram.com/p/DBqL1NZyPrJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art59.jpg", caption: "'The Protector of The Master Emerald-<br>Knuckles", instagram: "https://www.instagram.com/p/DFQsJJ0Ti82/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art60.jpg", caption: "'Dwayne 'The Rock' Johnson as<br>Black Adam'", instagram: "https://www.instagram.com/p/DEHhmjKS5ko/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art61.jpg", caption: "'Detective Pikachu'", instagram: "https://www.instagram.com/p/DB5rS1eyJAK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art62.jpg", caption: "'The Upper Moon 2<br>Doma'", instagram: "https://www.instagram.com/p/DD6svu7SYAc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art63.jpg", caption: "'Capturing the rhythm of movement in stillness'", instagram: "https://www.instagram.com/p/DD2NJRpSJJT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art64.jpg", caption: "'The statue of GOD'", instagram: "https://www.instagram.com/p/DDjOnlsSZQ1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art65.jpg", caption: "'The Attack Titan'", instagram: "https://www.instagram.com/p/DBs_4fpSile/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art66.jpg", caption: "'Ken Takakura -<br>Okkarun'", instagram: "https://instagram.com/vedantartshttps://www.instagram.com/p/DBn86d2SOdi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "68.jpg", caption: "'Toya Todoroki -<br>DABI🔥'", instagram: "https://www.instagram.com/p/DCmaLTCyAn4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art67.jpg", caption: "'The Subsitute Shinigami<br> Kurosaki Ichigo'", instagram: "https://www.instagram.com/p/DJYxc1tT9zL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===" },
  { img: "art68.jpg", caption: "'The Shadow Monarch<br> Sung Jinwoo'", instagram: "https://www.instagram.com/p/DJ9zpyWTcyB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art69.jpg", caption: "'~Cosmic~<br> Roronoa Zoro'", instagram: "https://www.instagram.com/p/DKSMrBGzAT6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art70.jpg", caption: "'Levi Ackerman ⚔️'", instagram: "https://www.instagram.com/p/DLPzc7qSqUC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "art71.jpg", caption: "'The Shadow Monarch'", instagram: "https://www.instagram.com/p/DLjWXXMyzMo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },

];

const galleryGrid = document.getElementById('galleryGrid');

// Loop through each artwork and dynamically create the HTML
artworks.forEach(art => {
  const item = document.createElement('div');
  item.className = "bg-[#2A2F33] text-[#BBB7A4] border border-[#8A8B94] p-2 rounded hover:shadow-xl transition";

  // Create the image element with error handling for broken images
  const image = document.createElement('img');
  image.src = art.img;
  image.alt = art.caption;
  image.className = "object-contain mb-2 w-full h-48 bg-[#2A2F33] p-2 rounded transition-transform duration-300 ease-in-out";
  
  // Add event listener for image error (fallback to placeholder if image is broken)
  image.onerror = function() {
    image.src = 'path_to_placeholder_image.jpg'; // Replace with a real placeholder image path
  };

  // Add hover scaling effect
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.05)';
  });
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });

  // Set up the rest of the content
  item.innerHTML = `
    <div class="image-container mb-2">
      ${image.outerHTML}
    </div>
    <p class="text-center">${art.caption}</p>
    <a href="${art.instagram}" target="_blank" class="block text-center text-sm text-[#8A8B94] hover:underline">View on Instagram</a>
  `;
  
  galleryGrid.appendChild(item);
});
 
// ✅ Add message after all artworks
const messageDiv = document.createElement('div');
messageDiv.className = "bg-[#2A2F33] text-[#BBB7A4] border border-dashed border-[#8A8B94] p-6 rounded text-center text-lg italic";
messageDiv.innerText = "New artwork coming soon...";
galleryGrid.appendChild(messageDiv);
