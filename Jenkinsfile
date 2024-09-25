pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t your-app-name .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                echo 'Running SonarQube analysis...'
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                sh 'docker run -d -p 80:80 your-app-name'
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Monitoring the application...'
                // Add your monitoring tool configuration here
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker containers...'
            sh 'docker stop $(docker ps -q -f "ancestor=your-app-name") || true'
        }
        success {
            echo 'Pipeline succeeded!'
            // Add notification code here
        }
        failure {
            echo 'Pipeline failed!'
            // Add notification code here
        }
    }
}
