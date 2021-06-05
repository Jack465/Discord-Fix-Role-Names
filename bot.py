import discord

client = discord.Client()

@client.event
async def on_ready():
    print("Started")
    for guild in client.guilds:
        for role in guild.roles:
            if role.managed == False and role.name != "@everyone":
                await role.edit(name=role.name.replace("-", " ").title())

client.run(your_token)
