RegisterNUICallback("GetPlayerId", function(data, cb)
    cb(GetPlayerServerId(PlayerId()))
end)