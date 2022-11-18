ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

Citizen.CreateThread(function()
    while true do 
        Citizen.Wait(1000)
        TriggerEvent('esx_status:getStatus', 'hunger', function(status)
            food = status.val / 10000
        end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status)
            thirst = status.val / 10000
        end)
        SendNUIMessage({
            armour = GetPedArmour(PlayerPedId());
            health = GetEntityHealth(PlayerPedId())-100;
            food = food;
            thirst = thirst;
        })
    end
end)