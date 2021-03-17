const { Plugin } = require("powercord/entities");

function swap(house) {
  require("powercord/webpack").getModule(["joinHypeSquadOnline"], false).joinHypeSquadOnline({ houseID: house });
};

module.exports = class Swap extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "swap",
      aliases: ["hypesquad", "house"],
      description: "Allows you to change Hypesquad House",
      usage: "{c} (Brilliance, Bravery, Balance)",
      executor: async (args) => {
        if (!args[0])
          return {
            send: false,
            result: {
              type: "rich",
              title: "Hypesquad",
              description:
                "Please provide a house to swap.\nHouses : Brilliance, Bravery, Balance",
            },
          };
        let house = args[0].toLowerCase();
        switch (house) {
          case "brilliance":
            swap("HOUSE_2");
            return {
              send: false,
              result: {
                type: "rich",
                title: "Hypesquad",
                description: `Your house has been swapped to **${house}**`,
              },
            };
            break;
          case "bravery":
            swap("HOUSE_1");
            return {
              send: false,
              result: {
                type: "rich",
                title: "Hypesquad",
                description: `Your house has been swapped to **${house}**`,
              },
            };
            break;
          case "balance":
            swap("HOUSE_3")
            return {
              send: false,
              result: {
                type: "rich",
                title: "Hypesquad",
                description: `Your house has been swapped to **${house}**`,
              },
            };
            break;
        }
      },
    });
  }
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("swap");
  }
};
