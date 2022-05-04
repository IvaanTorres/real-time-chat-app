<script setup lang="ts">
import { routes } from '~/enums'

const router = useRouter()
// Redirect automatically to the login page if the user is not authenticated
onMounted(() => router.push(routes.LOGIN))
</script>
