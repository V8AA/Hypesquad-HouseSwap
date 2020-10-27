const { Plugin } = require("powercord/entities");

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
            require("powercord/webpack")
              .getModule(["joinHypeSquadOnline"], false)
              .joinHypeSquadOnline({ houseID: "HOUSE_2" });
            return {
              send: false,
              result: {
                type: "rich",
                title: "Hypesquad",
                description: "Your house has been swapped to **Brilliance**",
              },
            };
            break;
          case "bravery":
            require("powercord/webpack")
              .getModule(["joinHypeSquadOnline"], false)
              .joinHypeSquadOnline({ houseID: "HOUSE_1" });
            return {
              send: false,
              result: {
                type: "rich",
                title: "Hypesquad",
                description: "Your house has been swapped to **Bravery**",
              },
            };
            break;
          case "balance":
            require("powercord/webpack")
              .getModule(["joinHypeSquadOnline"], false)
              .joinHypeSquadOnline({ houseID: "HOUSE_3" });
            return {
              send: false,
              result: {
                type: "rich",
                title: "Hypesquad",
                description: "Your house has been swapped to **Balance**",
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
