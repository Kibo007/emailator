function localtunnel {
    lt -p 5000 -s kdsaidniadwlfsdawdwd
}

until localtunnel; do
echo "localtunel server crashed"
sleep 2
done