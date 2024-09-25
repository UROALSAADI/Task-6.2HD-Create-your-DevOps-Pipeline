pipeline {
    agent any

    stages {
        // Step 4: Build stage (if using Docker to build a web app)
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t your-app-name .'
            }
        }

        // Step 5: Test stage
        stage('Test') {
            steps {
                echo 'Running automated tests...'
                // Install necessary packages and run tests
                sh 'npm install'
                sh 'npm test'
            }
        }

        // Step 6: Code Quality Analysis stage using SonarQube
        stage('Code Quality Analysis') {
            steps {
                echo 'Running SonarQube analysis...'
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }

        // Step 7: Deploy stage (if using Docker to deploy the web app)
        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                sh 'docker run -d -p 80:80 your-app-name'
            }
        }

        // Step 9: Monitoring and Alerting
        stage('Monitoring and Alerting') {
            steps {
                echo 'Monitoring the application...'
                // Add your monitoring tool (Datadog, New Relic, etc.) configuration here
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker containers...'
            sh 'docker stop $(docker ps -q)'
        }
    }
}
