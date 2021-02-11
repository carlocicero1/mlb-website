
    import Player from '@/components/PlayerModal.vue'
    import { mount } from'@vue/test-utils'

    test('Awaits API call and returns specified player object based on ID', async () => {
        const wrapper = mount(Player, {
            propsData: {
              playerId: '660620',
              fullName: 'Jonathan Arauz'  
            },
            mocks: {
                $route: { path: `https://content.mlb.com/images/headshots/current/60x60/660620@2x.png`}
            }
        });

        const $route = `https://content.mlb.com/images/headshots/current/60x60/660620@2x.png`

        await wrapper.trigger('click');

        // await axios.get(`https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='660620'`)

        expect(wrapper.vm.$route.path).toBe($route)
        console.log(wrapper)
    });