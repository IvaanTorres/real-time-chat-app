<script setup lang="ts">
const router = useRouter()
// Redirect automatically to the login page if the user is not authenticated
onMounted(() => router.push('/auth/login'))
</script>
