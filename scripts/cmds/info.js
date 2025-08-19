const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info", "profile"],
    author: "Amit Max ⚡",
    role: 0,
    shortDescription: "Show owner's profile",
    longDescription: "Shows a short personal profile of the owner.",
    category: "profile",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const profile = `
『 SAZZAD MAX ⚡ 』

• Name: Rafi Elan Sazzad ⚡  
• Class: 6'th Semester diploma Engineering  
• Group: Power
• Gender: Male  
• DOB: xx - xx - xx 
• Religion: Muslim
• Blood: O+
• Height: 5.8 fit  
• Location: Panir'tank, Dinajpur  
• Hobby: Flirting  
• Status: Single  
• FB:  https://www.facebook.com/profile.php?id=61578415994269
• IG: instagram.xx- 
• Email: sazzadmax100@gmail.com  

⏰ Time: ${time}`;

    api.sendMessage(profile, event.threadID, (err, info) => {
      if (err) return console.error(err);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000); // 20 seconds = 20000 ms
    });
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
