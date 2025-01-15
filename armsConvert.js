local Players = game:GetService("Players")
local StarterGui = game:GetService("StarterGui")
local watchedPlayers = {"L0CKED_1N1"}
local specialPlayer = "alt_acc9996"
local Girlfriend = "adorxfleurys"
local support_team = {"Ixgale7530", "starsorbitspace", "goldgoldgoldBlazn", "euigwerergre", "o7rssuk"}
getgenv().owner_watch_assigned_bool = false

local function sendNotification(title, text, iconId, duration)
    StarterGui:SetCore("SendNotification", {
        Title = title,
        Text = text,
        Icon = iconId or "rbxassetid://1",
        Duration = duration or 10
    })
end

local function isWatchedPlayer(playerName)
    for _, name in ipairs(watchedPlayers) do
        if playerName == name then
            return true
        end
    end
    return false
end

local function is_support_team(player)
    for _, name in ipairs(support_team) do
        if player == name then
            return true
        end
    end
    return false
end

Players.PlayerAdded:Connect(function(player)
    if isWatchedPlayer(player.Name) then
        if getgenv().owner_watch_assigned_bool then
            sendNotification("Alert!", "Owner of Zacks Easy Hub just rejoined the server.", "rbxassetid://1", 10)
        else
            getgenv().owner_watch_assigned_bool = true
            sendNotification("Alert!", "Owner of Zacks Easy Hub has joined the game!", "rbxassetid://1", 10)
        end
        sendNotification("Owner:", tostring(player.Name), "rbxassetid://1", 10)
    elseif player.Name == specialPlayer then
        sendNotification("Alert!", "Script owners daughter has joined this server, No harassment.", "rbxassetid://1", 7)
        sendNotification("Notification:", "Doing so will result in being blacklisted from the script.", "rbxassetid://1", 7)
        wait(0.6)
        sendNotification("Username:", specialPlayer, "rbxassetid://1", 4)
    elseif player.Name == Girlfriend then
        sendNotification("Alert!", "Script owners girlfriend has joined this server.", "rbxassetid://1", 6)
        wait(0.3)
        sendNotification("Note:", "Harassing will result in you being blacklisted on the spot.", "rbxassetid://1", 6)
        wait()
        sendNotification("Username:", Girlfriend, "rbxassetid://1", 5)
    elseif is_support_team(player.Name) then
        sendNotification("Notification: ", "Tech support team member has joined the server!", 5)
        wait(0.3)
        sendNotification("Username: ", tostring(player.Name), 5)
    end
end)

Players.PlayerRemoving:Connect(function(player)
    if isWatchedPlayer(player.Name) then
        sendNotification("Notification:", "Script owner has left the server!", "rbxassetid://1", 8)
    elseif player.Name == specialPlayer then
        sendNotification("Notification:", "Script owners daughter has left the server.", "rbxassetid://1", 6)
    elseif player.Name == Girlfriend then
        sendNotification("Notification:", "Script owners girlfriend has left the server.", "rbxassetid://1", 5)
        wait(0.2)
        sendNotification("Notification:", "You are good to go.", "rbxassetid://1", 5)
    elseif is_support_team(player.Name) then
        sendNotification("Notification:", "Support team has left the server.", 5)
    end
end)

for _, player in ipairs(Players:GetPlayers()) do
    if isWatchedPlayer(player.Name) then
        getgenv().owner_watch_assigned_bool = true
        sendNotification("Alert!", "Owner of Zacks Easy Hub is in this server.", "rbxassetid://1", 10)
        sendNotification("Owner:", tostring(player.Name), "rbxassetid://1", 5)
    elseif player.Name == specialPlayer then
        sendNotification("Alert!", "Script owner's daughter is in this server. Do not harass her.", "rbxassetid://1", 7)
        sendNotification("Notification:", "Doing so will result in being blacklisted from the script.", "rbxassetid://1", 7)
        wait(0.6)
        sendNotification("Username:", specialPlayer, "rbxassetid://1", 4)
    elseif player.Name == Girlfriend then
        sendNotification("Alert!", "Script owner's girlfriend is in this server.", "rbxassetid://1", 7)
        wait(0.2)
        sendNotification("Alert!", "Harassment will result in an immediate blacklist.", "rbxassetid://1", 7)
    elseif is_support_team(player.Name) then
        sendNotification("Notification:", "Support team is in this server (prob assisting)", 5)
    end
end
