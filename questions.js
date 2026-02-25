const questions = [
  /* 🏰 The Early 1800s & The German Confederation */
  {
    q: "Why did Germany not exist as a single state before 1871?",
    options: ["It was divided into many independent states", "It was controlled by France", "It was part of Russia", "It was a colony of Britain"],
    answer: 0,
    explanation: "Before 1871, the German region consisted of many independent kingdoms, duchies, and states rather than one unified nation."
  },
  {
    q: "Name two major German kingdoms before unification.",
    options: ["Prussia and Bavaria", "Austria and Spain", "France and Prussia", "Russia and Saxony"],
    answer: 0,
    explanation: "Prussia and Bavaria were two of the most powerful German kingdoms before unification."
  },
  {
    q: "Which smaller German kingdoms existed before unification?",
    options: ["Saxony and Württemberg", "Portugal and Naples", "Belgium and Holland", "Poland and Denmark"],
    answer: 0,
    explanation: "Saxony and Württemberg were among the smaller German kingdoms before 1871."
  },
  {
    q: "Which two powers dominated the German Confederation?",
    options: ["France and Britain", "Austria and Prussia", "Russia and Italy", "Spain and Austria"],
    answer: 1,
    explanation: "Austria and Prussia were the two dominant powers within the German Confederation."
  },
  {
    q: "Why were the small German states considered vulnerable after the Napoleonic Era?",
    options: ["They lacked strong militaries", "They had no population", "They were colonies", "They were wealthy"],
    answer: 0,
    explanation: "Many small states lacked strong military protection, making them vulnerable to larger European powers."
  },
  {
    q: "How did Napoleon’s policies affect German nationalism?",
    options: ["They weakened unity", "They encouraged a shared identity", "They ended trade", "They divided Prussia"],
    answer: 1,
    explanation: "Napoleon’s occupation encouraged German states to develop a stronger shared national identity."
  },
  {
    q: "Why did many German states develop hostility toward France?",
    options: ["Religious conflict", "Napoleon’s invasions and control", "Trade disputes only", "Colonial rivalry"],
    answer: 1,
    explanation: "Napoleon’s domination created resentment and hostility toward France."
  },
  {
    q: "What common identity began forming among German states after Napoleon?",
    options: ["Colonial identity", "National German identity", "Roman identity", "Russian alliance"],
    answer: 1,
    explanation: "Shared language and culture encouraged the growth of German nationalism."
  },
  {
    q: "What was the purpose of the German Confederation created in 1815?",
    options: ["Promote unity and defense", "Create colonies", "End trade", "Support France"],
    answer: 0,
    explanation: "The Confederation aimed to provide collective security and cooperation among German states."
  },
  {
    q: "Which meeting reorganized Central Europe after Napoleon’s defeat?",
    options: ["Congress of Vienna", "Treaty of Versailles", "Berlin Conference", "Congress of Berlin"],
    answer: 0,
    explanation: "The Congress of Vienna reorganized Europe after Napoleon’s defeat."
  },
  {
    q: "What year was the German Confederation formed?",
    options: ["1815", "1848", "1866", "1871"],
    answer: 0,
    explanation: "The German Confederation was formed in 1815 at the Congress of Vienna."
  },
  {
    q: "What was the Diet of Frankfurt?",
    options: ["A parliament of the German Confederation", "A battle", "A trade agreement", "A war treaty"],
    answer: 0,
    explanation: "The Diet of Frankfurt was the central assembly representing the German Confederation."
  },
  {
    q: "Why did Austria hold influence within the Confederation?",
    options: ["It was the largest power", "It controlled France", "It owned colonies", "It had no rivals"],
    answer: 0,
    explanation: "Austria was historically powerful and led the Confederation."
  },
  {
    q: "What was the main goal of the Congress of Vienna regarding Central Europe?",
    options: ["Restore balance of power", "Expand France", "Create colonies", "Unite Germany immediately"],
    answer: 0,
    explanation: "The Congress aimed to restore stability and balance after Napoleon."
  },
  {
    q: "Why was military strengthening slow after 1815?",
    options: ["Desire for peace", "Lack of soldiers", "Economic collapse", "French control"],
    answer: 0,
    explanation: "European powers prioritized peace and stability after years of war."
  },

  /* 📈 Economic Integration (Zollverein) */
  {
    q: "What role did Prussia play in economic integration?",
    options: ["Led customs union efforts", "Opposed trade", "Supported France", "Left the Confederation"],
    answer: 0,
    explanation: "Prussia led economic cooperation that strengthened German unity."
  },
  {
    q: "What was the Zollverein?",
    options: ["A military alliance", "A customs union", "A constitution", "A royal marriage"],
    answer: 1,
    explanation: "The Zollverein was a customs union that removed internal trade barriers among German states."
  },
  {
    q: "Why was the Zollverein important for unification?",
    options: ["It united armies", "It strengthened economic ties", "It ended monarchy", "It expanded colonies"],
    answer: 1,
    explanation: "Economic unity through free trade helped promote political unity."
  },

  /* 🗳️ The 1848 Revolutions */
  {
    q: "What was the Frankfurt Parliament of 1848?",
    options: ["A Prussian army council", "An Austrian reform movement", "An assembly to create a unified German constitution", "A military alliance"],
    answer: 2,
    explanation: "The Frankfurt Parliament was an attempt to create a unified German constitution in 1848."
  },
  {
    q: "Why did Frederick William IV reject the imperial crown?",
    options: ["He feared Austria", "He refused a crown offered by a parliament", "He disliked nationalism", "He supported France"],
    answer: 1,
    explanation: "He rejected the crown because it was offered by a parliament rather than by other monarchs."
  },
  {
    q: "What did the liberals want in 1848?",
    options: ["Absolute monarchy", "Colonial expansion", "Constitutional government and national unity", "Austrian dominance"],
    answer: 2,
    explanation: "Liberals wanted constitutional government, rights, and German unity."
  },
  {
    q: "What was the Punctation of Olmütz (1850)?",
    options: ["Prussia backed down to Austria", "A war treaty with France", "A Zollverein agreement", "A Danish alliance"],
    answer: 0,
    explanation: "Prussia agreed to abandon its union plans and accept Austrian dominance."
  },
  {
    q: "Why did Austria oppose Prussian leadership in 1849?",
    options: ["Religious reasons", "Fear of losing influence in Germany", "Economic collapse", "French pressure"],
    answer: 1,
    explanation: "Austria feared losing its dominant position among the German states."
  },
  {
    q: "How did the failure of 1848 influence later unification?",
    options: ["Ended nationalism", "Strengthened Austrian power", "Encouraged military-led unification", "Created democracy"],
    answer: 2,
    explanation: "After liberal failure, unification shifted toward military leadership under Prussia."
  },

  /* ⚔️ Second Schleswig War */
  {
    q: "What triggered the Second Schleswig War (1864)?",
    options: ["Danish attempts to annex Schleswig", "French invasion", "Russian expansion", "Austrian revolt"],
    answer: 0,
    explanation: "Denmark attempted to incorporate Schleswig, provoking Prussia and Austria."
  },
  {
    q: "Which duchies were involved in the conflict with Denmark?",
    options: ["Alsace and Lorraine", "Schleswig and Holstein", "Bavaria and Saxony", "Hanover and Hesse"],
    answer: 1,
    explanation: "Schleswig and Holstein were the contested duchies."
  },
  {
    q: "Which two powers fought Denmark?",
    options: ["Prussia and Austria", "France and Britain", "Russia and Italy", "Bavaria and Saxony"],
    answer: 0,
    explanation: "Prussia and Austria allied against Denmark."
  },
  {
    q: "What was the result of the Gastein Convention (1865)?",
    options: ["Denmark regained control", "Austria controlled both duchies", "Prussia and Austria divided administration", "France annexed territory"],
    answer: 2,
    explanation: "Prussia administered Schleswig and Austria administered Holstein."
  },
  {
    q: "Why were Schleswig and Holstein important?",
    options: ["Agricultural value", "Strategic and national significance", "Colonial access", "Religious importance"],
    answer: 1,
    explanation: "They had strategic importance and large German populations."
  },

  /* ⚔️ Austro-Prussian War */
  {
    q: "Why did Austria feel threatened by Prussia?",
    options: ["Prussia’s growing military and economic power", "Religious reforms", "French alliance", "Colonial rivalry"],
    answer: 0,
    explanation: "Prussia’s rise threatened Austrian dominance in German affairs."
  },
  {
    q: "Which country allied with Prussia in 1866?",
    options: ["France", "Russia", "Italy", "Britain"],
    answer: 2,
    explanation: "Italy allied with Prussia in exchange for territory from Austria."
  },
  {
    q: "What nickname is given to the Austro-Prussian War?",
    options: ["Seven Weeks’ War", "Iron War", "German Civil War", "Northern Conflict"],
    answer: 0,
    explanation: "The war lasted only seven weeks."
  },
  {
    q: "What military advantage did Prussia have?",
    options: ["Stronger navy", "Better artillery", "Railway mobilization and needle guns", "More allies"],
    answer: 2,
    explanation: "Prussia had modern rifles and efficient rail transport."
  },
  {
    q: "What happened to the German Confederation after 1866?",
    options: ["It expanded", "It was dissolved", "France controlled it", "Austria strengthened it"],
    answer: 1,
    explanation: "The German Confederation was dissolved after Austria’s defeat."
  },
  {
    q: "What major battle decided the Austro-Prussian War?",
    options: ["Battle of Waterloo", "Battle of Königgrätz", "Battle of Leipzig", "Battle of Sedan"],
    answer: 1,
    explanation: "The Battle of Königgrätz (1866) secured Prussia’s victory over Austria."
  },
  {
    q: "What was created after Austria’s defeat in 1866?",
    options: ["North German Confederation", "Holy Roman Empire", "European Union", "League of Nations"],
    answer: 0,
    explanation: "Prussia formed the North German Confederation after defeating Austria."
  },

  /* 🇫🇷 Franco-Prussian War */
  {
    q: "What event sparked tension in 1870?",
    options: ["The Spanish throne crisis", "Italian rebellion", "Austrian protest", "British alliance"],
    answer: 0,
    explanation: "A dispute over the Spanish throne increased tensions."
  },
  {
    q: "How did Bismarck manipulate the Ems Dispatch?",
    options: ["He destroyed it", "He shortened and edited it to provoke France", "He ignored it", "He translated it wrongly"],
    answer: 1,
    explanation: "He edited the telegram to make it appear insulting to the French."
  },
  {
    q: "Which southern German states joined Prussia in 1870?",
    options: ["Bavaria, Württemberg, Baden", "Austria and Saxony", "Italy and Hanover", "Denmark and Hesse"],
    answer: 0,
    explanation: "Southern German states joined against France."
  },
  {
    q: "What happened to Napoleon III during the war?",
    options: ["He fled to Britain", "He became emperor again", "He was captured at Sedan", "He defeated Prussia"],
    answer: 2,
    explanation: "Napoleon III was captured at the Battle of Sedan."
  },
  {
    q: "Which territory did Germany annex from France in 1871?",
    options: ["Alsace-Lorraine", "Normandy", "Brittany", "Corsica"],
    answer: 0,
    explanation: "Germany annexed Alsace-Lorraine after defeating France in 1871."
  },
  {
    q: "Where was the German Empire proclaimed?",
    options: ["Berlin", "Frankfurt", "Munich", "Versailles"],
    answer: 3,
    explanation: "The proclamation occurred at the Hall of Mirrors in Versailles in 1871."
  },
  {
    q: "What was the Treaty of Frankfurt (1871)?",
    options: ["Peace treaty ending the war", "Trade agreement", "Austrian alliance", "British intervention"],
    answer: 0,
    explanation: "It officially ended the Franco-Prussian War."
  },

  /* 👑 Bismarck & Realpolitik */
  {
    q: "What is Realpolitik?",
    options: ["Idealistic politics", "Religious rule", "Practical political strategy", "Colonial expansion"],
    answer: 2,
    explanation: "Realpolitik focused on practical political goals and power rather than ideology."
  },
  {
    q: "What did Bismarck mean by 'blood and iron'?",
    options: ["Peaceful reform", "War and military strength", "Trade alliances", "Religious unity"],
    answer: 1,
    explanation: "He meant unification would come through war and industrial strength."
  },
  {
    q: "What position did Bismarck hold?",
    options: ["Emperor", "Foreign Minister", "Chancellor of Prussia", "General"],
    answer: 2,
    explanation: "He served as Prime Minister and later the first Chancellor of Germany."
  },
  {
    q: "Who originally coined the term Realpolitik?",
    options: ["Ludwig von Rochau", "Bismarck", "Metternich", "Wilhelm I"],
    answer: 0,
    explanation: "The term was coined by Ludwig von Rochau."
  },
  {
    q: "Who became the first German Emperor in 1871?",
    options: ["Wilhelm I", "Wilhelm II", "Frederick IV", "Otto von Bismarck"],
    answer: 0,
    explanation: "Wilhelm I of Prussia became the first German Emperor."
  },

  /* 🌍 Geography & Physical Features */
  {
    q: "Why was Germany’s central location in Europe important?",
    options: ["Trade and military access", "Colonial expansion", "Isolation", "Sea dominance"],
    answer: 0,
    explanation: "Germany’s central position allowed strong trade networks and military mobility."
  },
  {
    q: "Why was the Rhine River significant?",
    options: ["Cultural symbol only", "Economic trade route", "Military weakness", "Religious center"],
    answer: 1,
    explanation: "It was a vital industrial and trade route."
  },
  {
    q: "How did the Elbe River support integration?",
    options: ["Connected trade routes", "Blocked expansion", "Divided states", "Supported France"],
    answer: 0,
    explanation: "It helped internal trade and movement."
  },
  {
    q: "Why was the Danube important?",
    options: ["Linked southern Germany to Europe", "Colonial trade", "Religious expansion", "Naval warfare"],
    answer: 0,
    explanation: "It connected southern regions to Central Europe."
  },
  {
    q: "How did the North Sea and Baltic Sea important?",
    options: ["Fishing only", "Trade and naval power", "Religious missions", "Colonial farming"],
    answer: 1,
    explanation: "They allowed maritime trade and naval strength."
  },
  {
    q: "How did the North German Plain help campaigns?",
    options: ["Difficult terrain", "Easy troop movement", "Blocked railways", "Prevented trade"],
    answer: 1,
    explanation: "Flat land allowed rapid troop movement."
  }
];
