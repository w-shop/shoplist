<script>
    import Sprite from '../sprite';

    export default {
        functional: true,
        props: ['spriteId'],
        render(h, { props }) {
            return h('svg', {
                attrs: {
                    width: props.width || 24,
                    height: props.height || 24
                }
            }, [
                h('use', {
                    attrs: {
                        'xlink:href': Sprite.get(props.spriteId)
                    }
                })
            ])
        }
    }
</script>
