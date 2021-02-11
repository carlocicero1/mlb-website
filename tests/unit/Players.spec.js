
    import PlayerModal from '@/components/PlayerModal.vue'
    import { mount } from'@vue/test-utils'

    test('Check that player name is displayed and that image is rendered', async () => {
        const wrapper = mount(PlayerModal, {
            propsData: {
              playerId: '660620',
              fullName: 'Jonathan Arauz'  
            },
            mocks: {
                $route: { path: `https://content.mlb.com/images/headshots/current/60x60/660620@2x.png`}
            }
        });

        let heading = wrapper.find('h1')
        let image = wrapper.find('img')

        expect(heading.text()).toEqual('Jonathan Arauz')
        expect(image.exists()).toBe(true)
    });