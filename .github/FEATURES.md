# ✨ Project Features

This document outlines the core functionality, commands, and automation features of the `Steam-Card-Bot-PRO` fork.

## 🚀 Unique & Core Features

* **Project is completely FREE** with every feature and aspect available.
* **Endless Customization:** All features, commands, and options can be enabled or disabled via the `config.js` file.
    > **TRUE** = Enabled
    > **FALSE** = Disabled
* Chat commands are **not case sensitive**.
* Software provides readable and understandable developer console logs with detailed descriptions.
* The console displays all incoming chat messages from all users.

## 💰 Multi-Currency Support

The bot is designed to handle trading with multiple Steam currencies:

* **CS:GO keys** - **❌ NO LONGER FUNCTIONAL (Steam Changes)**
* **CS:GO Hydra Keys** - **❌ NO LONGER FUNCTIONAL (Steam Changes)**
* TF2 Keys
* **TF2 Refined Metal (Ref)**- **❌ Limited Functionality due to bad Coding Practices in the Original this is a Fork of**
* Gems

---

# 🤖 Bot Command List

### General Commands
| Command | Description |
| :--- | :--- |
| `!owner` | Display the owner's Steam profile link. |
| `!stats` | Get the current bot stock for all supported currencies. |
| `!rate` / `!price` | Display the bot's current trading prices and rates. |
| `!level [your dream level]` | Calculates the number of sets, keys, or gems required to reach your desired Steam level. |
| `!check` | Shows available sets for you, the total bot set count, and the price in TF2 keys. |
| `!check [amount]` | Shows how many sets and which level you will reach for a specified amount of any key. |
| `!reminder on/off` | Toggles notifications whenever new card sets are added to the bot's inventory. |

### Buying Commands (Acquire Card Sets)
| Command | Action | Note |
| :--- | :--- | :--- |
| `!buy [amount of keys]` | Use the main bot currency to buy card sets. | |**❌ NO LONGER FUNCTIONAL** |
| `!buyonecheck [amount]` | Shows available sets from games you *do not* have a badge for (1 set max per game). | |**❌ NO LONGER FUNCTIONAL** |
| `!buyany [amount of CS:GO keys]` | Buy any sets (including duplicates from already crafted badges) using CS:GO keys. | **❌ NO LONGER FUNCTIONAL** |
| `!buyone [amount of CS:GO keys]` | Buy one set of each uncrafted game badge using CS:GO keys (badge collectors only). | **❌ NO LONGER FUNCTIONAL** |
| `!buyref [amount of REF]` | Buy uncrafted sets using Refined Metal (REF). | |
| `!buyhydra [amount of Hydra keys]` | Buy sets using your CS:GO Hydra key(s). | **❌ NO LONGER FUNCTIONAL** |
| `!buycs [amount of CS:GO keys]` | Buy sets using your CS:GO key(s). | **❌ NO LONGER FUNCTIONAL** |
| `!buytf [amount of TF keys]` | Buy sets using your TF key(s). | |
| `!buygems [amount of sets]` | Buy sets using your Gems. | |

### Selling Commands (Sell Card Sets)
| Command | Action |
| :--- | :--- |
| `!sell [amount of keys]` | Sell your sets for the **BOT MAIN CURRENCY key(s)**. |**❌ NO LONGER FUNCTIONAL** |
| `!sellhydra [amount of Hydra keys]` | Sell your sets for Hydra key(s). | **❌ NO LONGER FUNCTIONAL** |
| `!sellcs [amount of CS:GO keys]` | Sell your sets for CS:GO key(s). | **❌ NO LONGER FUNCTIONAL** |
| `!selltf [amount of TF keys]` | Sell your sets for TF key(s). | |
| `!sellgems [amount of sets]` | Sell your sets for Gems. | |

### Admin Commands (Bot Management)
| Command | Action |
| :--- | :--- |
| `!block [steamID]` | Block a user with the given SteamID. |
| `!usercheck [steamID]` | Check how many sets the bot has available for a specific user. |
| `!withdraw` | Withdraw all TF2 keys from the bot. |
| `!restart` / `!refresh` | Restarts/Refreshes the bot. |
| `!exit` | Stops the bot and exits gracefully. |
| `!pause[time]` | Pauses the bot for the specified duration (e.g., `!pause5m`, `!pause1h`). |
| `!donatesets` | Allows sets to be donated to the bot's inventory. |
| `!broadcastall` | Sends the following message to all users on the bot's friend list. |
| `!broadcast` | Sends the following message only to users who have set `!reminder ON`. |

---

# ➕ Additional Automation Features

* **Friend Management:**
    * Auto accepting friend requests.
    * Optional welcome message upon accepting a request (configurable).
    * Optional auto-grouping of new friends (configurable).
    * Checks for offline friend requests.
    * Bot clearing friendlist (configurable timer for removing inactive users).
    * Optional message sent to users who are removed (configurable).
* **Security & Anti-Spam:**
    * Chat spam protection (toggleable in config).
    * Setting customizable limit of messages per second to count as spam.
    * Optional notification to the admin when a user is removed for spamming.
* **Group Invites:**
    * Responding to incoming group invites (toggleable).
    * Options to auto decline or auto accept incoming group invites.
* **Logging:**
    * Daily chat logs (toggleable).
    * Chat logs saved per user (toggleable).
    * Saves comprehensive logs of all trades.
* **Post-Trade:** Optional commenting after a successful trade (comment customizable).
