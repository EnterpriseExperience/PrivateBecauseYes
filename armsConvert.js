local Players = game:GetService("Players")
local StarterGui = game:GetService("StarterGui")
local watchedPlayers = {"L0CKED_1N1"}
local other_Player_Admin = "Renne1980ft"
local specialPlayer = "kets4eki_7"
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
    elseif player.Name == other_Player_Admin then
        sendNotification("Alert!", "A temporary mod for Zacks Easy Hub has joined!", "rbxassetid://1", 7)
        wait(0.5)
        sendNotification("Username:", other_Player_Admin, "rbxassetid://1", 5)
    end
end)

Players.PlayerRemoving:Connect(function(player)
    if isWatchedPlayer(player.Name) then
        sendNotification("Notification:", "Script owner has left the server!", "rbxassetid://1", 8)
    elseif player.Name == specialPlayer then
        sendNotification("Notification:", "Script owners daughter has left the server.", "rbxassetid://1", 6)
    elseif player.Name == other_Player_Admin then
        sendNotification("Notification:", "Temporary mod for Zacks Easy Hub has left the server!", "rbxassetid://1", 6)
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
    elseif player.Name == other_Player_Admin then
        sendNotification("Alert!", "A temporary mod for Zacks Easy Hub is in this server!", "rbxassetid://1", 7)
        wait(0.5)
        sendNotification("Username:", other_Player_Admin, "rbxassetid://1", 5)
    end
end
